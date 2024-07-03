import mongoose from 'mongoose';


const citySchema = new mongoose.Schema({
    cityName: {
        type: String,
        required: true
    }
}, { timestamps: true });

const CityModel =   mongoose.model('city', citySchema);

export default CityModel;