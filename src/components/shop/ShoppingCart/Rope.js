import Vector2 from "./Vector2";
import RopePoint from "./RopePoint";

export default class Rope {
  static generate(start, end, resolution, canvas) {
      const delta = Vector2.sub(end, start);
      const len = Vector2.mag(delta);

      let points = [];
      const pointsLen = len / resolution;

      for(let i = 0; i < pointsLen; i++) {
          const percentage = i / (pointsLen - 1);

          const lerpX = Math.lerp(start.x, end.x, percentage);
          const lerpY = Math.lerp(start.y, end.y, percentage);

          points[i] = new RopePoint({
              x: lerpX,
              y: lerpY
          }, resolution);
          points[i].mass = canvas.dataset.mass;
          points[i].damping = canvas.dataset.damping;
      }

      for(let i = 0; i < pointsLen; i++) {
          const prev = i != 0 ? points[i - 1] : null;
          const curr = points[i];
          const next = i != pointsLen - 1 ? points[i + 1] : null;

          curr.prev = prev;
          curr.next = next;
      }

      points[0].isFixed = points[points.length - 1].isFixed = true;

      return points;
  }
  constructor(points, solverIterations) {
      this._points = points;
      this.update = this.update.bind(this);
      this._prevDelta = 0;
      this._solverIterations = solverIterations;

      this.getPoint = this.getPoint.bind(this);
  }
  getPoint(index) {
      return this._points[index];
  }
  update(canvas, dt) {
      if(document.hidden) {
          return;
      }
      for(let i = 1; i < this._points.length-1; i++) {
          let point = this._points[i];

          let accel = {
              x: canvas.dataset.x,
              y: canvas.dataset.y
          };

          RopePoint.integrate(point, accel, dt, this._prevDelta);
      }
      for(let iteration = 0; iteration < this._solverIterations; iteration++) {
          for(let i = 1; i < this._points.length-1; i++) {
              let point = this._points[i];
              RopePoint.constrain(point);
          }
      }
      this._prevDelta = dt;
  }
}