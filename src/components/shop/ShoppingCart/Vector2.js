export default class Vector2 {
  static zero() {
      return { x: 0, y: 0 };
  }
  static sub(a, b) {
      return { x: a.x - b.x, y: a.y - b.y };
  }
  static add(a, b) {
      return { x: a.x + b.x, y: a.y + b.y };
  }
  static mult(a, b) {
      return { x: a.x * b.x, y: a.y * b.y };
  }
  static scale(v, scaleFactor) {
      return { x: v.x * scaleFactor, y: v.y * scaleFactor };
  }
  static mag(v) {
      return Math.sqrt(v.x * v.x + v.y * v.y);
  }
  static normalized(v) {
      const mag = Vector2.mag(v);
      if(mag === 0) {
          return Vector2.zero();
      }
      return { x: v.x / mag, y: v.y / mag };
  }
}