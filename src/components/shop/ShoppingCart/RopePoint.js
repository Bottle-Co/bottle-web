import Vector2 from "./Vector2";

export default class RopePoint {
  static integrate(point, gravity, dt, previousFrameDt) {
      point.velocity = Vector2.sub(point.pos, point.oldPos);
      point.oldPos = { ...point.pos };

      let timeCorrection = previousFrameDt != 0.0 ? dt / previousFrameDt : 0.0;

      let accel = Vector2.add(gravity, {
          x: 0,
          y: point.mass
      });

      const velCoef = timeCorrection * point.damping;
      const accelCoef = Math.pow(dt, 2);

      point.pos.x += point.velocity.x * velCoef + accel.x * accelCoef;
      point.pos.y += point.velocity.y * velCoef + accel.y * accelCoef;
  }
  static constrain(point) {
      if(point.next) {
          const delta = Vector2.sub(point.next.pos, point.pos);
          const len = Vector2.mag(delta);
          const diff = len - point.distanceToNextPoint;
          const normal = Vector2.normalized(delta);

          if(!point.isFixed) {
              point.pos.x += normal.x * diff * 0.25;
              point.pos.y += normal.y * diff * 0.25;
          }

          if(!point.next.isFixed) {
              point.next.pos.x -= normal.x * diff * 0.25;
              point.next.pos.y -= normal.y * diff * 0.25;
          }
      }
      if(point.prev) {
          const delta = Vector2.sub(point.prev.pos, point.pos);
          const len = Vector2.mag(delta);
          const diff = len - point.distanceToNextPoint;
          const normal = Vector2.normalized(delta);

          if(!point.isFixed) {
              point.pos.x += normal.x * diff * 0.25;
              point.pos.y += normal.y * diff * 0.25;
          }

          if(!point.prev.isFixed) {
              point.prev.pos.x -= normal.x * diff * 0.25;
              point.prev.pos.y -= normal.y * diff * 0.25;
          }
      }
  }
  constructor(initialPos, distanceToNextPoint) {
      this.pos = initialPos;
      this.distanceToNextPoint = distanceToNextPoint;
      this.isFixed = false;
      this.oldPos = { ...initialPos };
      this.velocity = Vector2.zero();
      this.mass = 1.0;
      this.damping = 1.0;
      this.prev = null;
      this.next = null;
  }
}