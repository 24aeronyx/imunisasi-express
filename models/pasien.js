const db = require("../config/config");

class Pasien {
  constructor(name, birth, phone, address, city) {
    this.name = name;
    this.birth = birth;
    this.phone = phone;
    this.address = address;
    this.city = city;
  }

  static selectPasien() {
    let sql = "CALL selectPasien();";

    return db.execute(sql);
  }

  static selectPasienById(id) {
    let sql = "CALL selectPasienById(?);";

    return db.execute(sql, [id]);
  }

  async insertPasien() {
    let sql = "CALL insertPasien(?, ?, ?, ?, ?)";

    const [newPasien, _] = await db.execute(sql, [
      this.name,
      this.birth,
      this.phone,
      this.address,
      this.city,
    ]);

    return newPasien;
  }
}

module.exports = Pasien;
