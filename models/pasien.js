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
    const [newPasien] = await db.execute(sql, [
      this.name,
      this.birth,
      this.phone,
      this.address,
      this.city,
    ]);

    return newPasien[0]; 
  }

  static deletePasien() {
    let sql = "CALL deletePasien();";
    return db.execute(sql);
  }

  static deletePasienById(id) {
    let sql = "CALL deletePasienById(?);";
    return db.execute(sql, [id]);
  }

  static updatePasienById(id, { name, birth, phone, address, city }) {
    let sql = "CALL updatePasienById(?, ?, ?, ?, ?, ?);";

    const params = [
      id,
      name || null,
      birth || null,
      phone || null,
      address || null,
      city || null,
    ];

    return db.execute(sql, params);
  }
}

module.exports = Pasien;
