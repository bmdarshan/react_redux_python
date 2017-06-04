from flask import Flask, Blueprint
from flask_restful import Api, url_for
from get_all_payChecks import GetAllPaychecks

app = Flask(__name__)
api_bp = Blueprint('api', __name__)
api = Api(api_bp)

api.add_resource(GetAllPaychecks, '/payChecks')
app.register_blueprint(api_bp)


# @app.route('/payChecks', methods=['GET'])
# def get_all_payChecks():
#   payChecks = db.payStub.find({});
#   output = []
#   for s in payChecks:
#     print s['payCheckNumber']
#     output.append({'payCheckNumber' : s['payCheckNumber'], 'payDate' : s['payDate']})
#   return jsonify({'result' : output})

# @app.route('/star/', methods=['GET'])
# def get_one_star(name):
#   star = mongo.db.stars
#   s = star.find_one({'name' : name})
#   if s:
#     output = {'name' : s['name'], 'distance' : s['distance']}
#   else:
#     output = "No such name"
#   return jsonify({'result' : output})

# @app.route('/star', methods=['POST'])
# def add_star():
#   star = mongo.db.stars
#   name = request.json['name']
#   distance = request.json['distance']
#   star_id = star.insert({'name': name, 'distance': distance})
#   new_star = star.find_one({'_id': star_id })
#   output = {'name' : new_star['name'], 'distance' : new_star['distance']}
#   return jsonify({'result' : output})

if __name__ == '__main__':
    app.run(debug=True)
