const db = require("../config/config");

class Vaksinasi {
  constructor(p_id, v_id, l_id) {
    this.p_id = p_id;
    this.v_id = v_id;
    this.l_id = l_id;
  }

  static selectVaksinasi() {
    let sql = "CALL selectVaksinasi();";
    return db.execute(sql);
  }

  static selectVaksinasiById(id) {
    let sql = "CALL selectVaksinasiById(?);";
    return db.execute(sql, [id]);
  }

  async insertVaksinasi() {
    let sql = "CALL insertVaksinasi(?, ?, ?)";
    const [newVaksinasi] = await db.execute(sql, [this.p_id, this.v_id, this.l_id]);
    return newVaksinasi[0];
  }

  static deleteVaksinasi() {
    let sql = "CALL deleteVaksinasi();";
    return db.execute(sql);
  }

  static deleteVaksinasiById(id) {
    let sql = "CALL deleteVaksinasiById(?);";
    return db.execute(sql, [id]);
  }

  static updateVaksinasiById(id, {p_id, v_id, l_id}) {
    let sql = "CALL updateVaksinasiById(?, ?, ?, ?);";
    const params = [id, p_id || null, v_id || null, l_id || null];
    return db.execute(sql, params);
  }
}

module.exports = Vaksinasi;
