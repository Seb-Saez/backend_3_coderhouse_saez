import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    type: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        default: null, // null cuando no tiene ningun dueño
    },
    adopted: {
        type: Boolean,
        default: false,
    }
});

const Pet = mongoose.model('Pets', petSchema);
export default Pet;
