// models/vaksin.js
const db = require("../config/config");

class Vaksin {
  constructor(name, category, stock) {
    this.name = name;
    this.category = category;
    this.stock = stock;
  }

  static selectVaksin() {
    let sql = "CALL selectVaksin();";
    return db.execute(sql);
  }

  static selectVaksinById(id) {
    let sql = "CALL selectVaksinById(?);";
    return db.execute(sql, [id]);
  }

  async insertVaksin() {
    let sql = "CALL insertVaksin(?, ?, ?)";
    const [newVaksin] = await db.execute(sql, [
      this.name,
      this.category,
      this.stock,
    ]);
    return newVaksin[0];
  }

  static deleteVaksin() {
    let sql = "CALL deleteVaksin();";
    return db.execute(sql);
  }

  static deleteVaksinById(id) {
    let sql = "CALL deleteVaksinById(?);";
    return db.execute(sql, [id]);
  }

  static updateVaksinById(id, { name, category, stock }) {
    let sql = "CALL updateVaksinById(?, ?, ?, ?);";
    const params = [id, name || null, category || null, stock || null];
    return db.execute(sql, params);
  }
}

module.exports = Vaksin;
