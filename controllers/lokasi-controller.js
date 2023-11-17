// controllers/lokasi-controller.js
const Lokasi = require("../models/lokasi");

exports.selectLokasi = async (req, res, next) => {
  try {
    const [lokasiArray, _] = await Lokasi.selectAllLokasi();

    // Mengambil elemen pertama dari array hasil
    const lokasi = lokasiArray[0];

    res.status(200).json({ lokasi });
  } catch (error) {
    next(error);
  }
};

exports.selectLokasiById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "ID parameter is required" });
    }

    const [lokasiArray, _] = await Lokasi.selectLokasiById(id);

    // Mengambil elemen pertama dari array hasil
    const lokasi = lokasiArray[0];

    if (!lokasi || lokasi.length === 0) {
      return res.status(404).json({ message: "Lokasi not found" });
    }

    res.status(200).json({ lokasi });
  } catch (error) {
    next(error);
  }
};

exports.insertLokasi = async (req, res, next) => {
  try {
    const { l_name, l_address, l_city } = req.body;

    if (!l_name || !l_address || !l_city) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newLokasi = new Lokasi(l_name, l_address, l_city);
    const insertedLokasi = await newLokasi.insertLokasi();

    res
      .status(201)
      .json({ message: "Lokasi added successfully", data: insertedLokasi });
  } catch (error) {
    next(error);
  }
};

exports.deleteLokasi = async (req, res, next) => {
  try {
    const [result, _] = await Lokasi.deleteAllLokasi();
    res
      .status(200)
      .json({ message: "All Lokasi deleted successfully", data: result });
  } catch (error) {
    next(error);
  }
};

exports.deleteLokasiById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "ID parameter is required" });
    }
    await Lokasi.deleteLokasiById(id);
    res.status(200).json({ message: "Lokasi deleted successfully" });
  } catch (error) {
    next(error);
  }
};

exports.updateLokasiById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { l_name, l_address, l_city } = req.body;

    if (!id) {
      return res.status(400).json({ message: "ID parameter is required" });
    }

    // Buat objek yang hanya berisi kolom-kolom yang ingin diupdate
    const updateData = {
      name: l_name,
      address: l_address,
      city: l_city,
    };

    await Lokasi.updateLokasiById(id, updateData);
    res.status(200).json({ message: "Lokasi updated successfully" });
  } catch (error) {
    next(error);
  }
};
