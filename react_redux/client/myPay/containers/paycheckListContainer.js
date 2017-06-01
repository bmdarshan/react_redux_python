import { connect } from "react-redux";
import { fetchSavedPaychecks } from "../actions/actions.js";
import PayCheckList from "../components/payCheckList.jsx";

const mapStateToProps = state => {
  return {
    payCheckList: state.payCheckList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSavedPaychecksFromService: (options) => {
      dispatch(fetchSavedPaychecks(options));
    }
  };
};

const PayCheckListContainer = connect(mapStateToProps, mapDispatchToProps)(PayCheckList);

export default PayCheckListContainer;
