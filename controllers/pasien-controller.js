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
    const insertedPasien = await newPasien.insertPasien();

    res
      .status(201)
      .json({ message: "Pasien added successfully", data: insertedPasien });
  } catch (error) {
    next(error);
  }
};

exports.deletePasien = async (req, res, next) => {
  try {
    await Pasien.deletePasien();
    res.status(200).json({ message: "Pasien deleted successfully" });
  } catch (error) {
    next(error);
  }
};

exports.deletePasienById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "ID parameter is required" });
    }
    await Pasien.deletePasienById(id);
    res.status(200).json({ message: "Pasien deleted successfully" });
  } catch (error) {
    next(error);
  }
};

exports.updatePasienById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { p_name, p_birth, p_phone, p_address, p_city } = req.body;

    if (!id) {
      return res.status(400).json({ message: "ID parameter is required" });
    }

    // Buat objek yang hanya berisi kolom-kolom yang ingin diupdate
    const updateData = {
      name: p_name || null,
      birth: p_birth || null,
      phone: p_phone || null,
      address: p_address || null,
      city: p_city || null,
    };

    await Pasien.updatePasienById(id, updateData);
    res.status(200).json({ message: "Pasien updated successfully" });
  } catch (error) {
    next(error);
  }
};
