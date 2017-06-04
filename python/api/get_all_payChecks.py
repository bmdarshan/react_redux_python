from flask import jsonify
from pymongo import MongoClient
from flask_restful import Resource


client = MongoClient()
db = client.myPay

class GetAllPaychecks(Resource):
  def get(self):
    payChecks = db.payStub.find({});
    output = []
    for s in payChecks:
      output.append({'payCheckNumber' : s['payCheckNumber'], 'payCheckDate' : s['payCheckDate'], 'payCheckAmount' : s['payCheckAmount']})
    return jsonify({'result' : output})
