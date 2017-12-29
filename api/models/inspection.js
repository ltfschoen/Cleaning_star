
const mongoose = require('./base');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const inspectionSchema = Schema({
  client: { type: ObjectId, ref: 'Client' },
  date: String,
  frequency: Number,
  auditor: String,
  comments: String,
  worker: { type: ObjectId, ref: 'Employee'}
});


const Inspection = mongoose.models.inspection || mongoose.model('Inspection', inspectionSchema);

module.exports = Inspection;
