const Pasien = require("../models/pasien");

exports.selectPasien = async (req, res, next) => {
  try {
    const [pasienArray, _] = await Pasien.selectPasien();

    // Mengambil elemen pertama dari array hasil
    const pasien = pasienArray[0];

    res.status(200).json({ pasien });
  } catch (error) {
    next(error);
  }
};


exports.selectPasienById = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      if (!id) {
        return res.status(400).json({ message: "ID parameter is required" });
      }
  
      const [pasienArray, _] = await Pasien.selectPasienById(id);
  
      // Mengambil elemen pertama dari array hasil
      const pasien = pasienArray[0];
  
      if (!pasien || pasien.length === 0) {
        return res.status(404).json({ message: "Pasien not found" });
      }
  
      res.status(200).json({ pasien });
    } catch (error) {
      next(error);
    }
  };
  

  exports.insertPasien = async (req, res, next) => {
    try {
      const { p_name, p_birth, p_phone, p_address, p_city } = req.body;
  
      if (!p_name || !p_birth || !p_phone || !p_address || !p_city) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      const newPasien = new Pasien(p_name, p_birth, p_phone, p_address, p_city);
      const [insertedPasienArray, _] = await newPasien.insertPasien();
  
      // Mengambil elemen pertama dari array hasil
      const insertedPasien = insertedPasienArray[0];
  
      res
        .status(201)
        .json({ message: "Pasien added successfully", data: insertedPasien });
    } catch (error) {
      next(error);
    }
  };
  