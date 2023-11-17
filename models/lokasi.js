// models/lokasi.js
const db = require("../config/config");

class Lokasi {
  constructor(name, address, city) {
    this.name = name;
    this.address = address;
    this.city = city;
  }

  static selectAllLokasi() {
    let sql = "CALL selectLokasi();";
    return db.execute(sql);
  }

  static selectLokasiById(id) {
    let sql = "CALL selectLokasiById(?);";
    return db.execute(sql, [id]);
  }

  async insertLokasi() {
    let sql = "CALL insertLokasi(?, ?, ?)";

    const [newLokasi] = await db.execute(sql, [
      this.name,
      this.address,
      this.city,
    ]);

    return newLokasi[0];
  }

  static deleteAllLokasi() {
    let sql = "CALL deleteLokasi();";
    return db.execute(sql);
  }

  static deleteLokasiById(id) {
    let sql = "CALL deleteLokasiById(?);";
    return db.execute(sql, [id]);
  }

  static updateLokasiById(id, { name, address, city }) {
    let sql = "CALL updateLokasiById(?, ?, ?, ?);";

    // Gantilah nilai undefined dengan null
    const params = [id, name || null, address || null, city || null];

    return db.execute(sql, params);
  }
}

module.exports = Lokasi;
