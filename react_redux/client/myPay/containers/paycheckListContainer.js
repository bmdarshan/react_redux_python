import { connect } from "react-redux";
import { removePaycheck } from "../actions/actions.js";
import PayCheckList from "../components/payCheckList.jsx";

const mapStateToProps = state => {
  return {
    payCheckList: state.payCheckList
  };
};

const PayCheckListContainer = connect(mapStateToProps)(PayCheckList);

export default PayCheckListContainer;
