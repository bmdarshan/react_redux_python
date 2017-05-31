import { connect } from "react-redux";
import { addPayCheck } from "../actions/actions.js";
import AddPaycheck from "../components/addPaycheck.jsx";

const mapDispatchToProps = dispatch => {
  return {
    addNewPaycheck: payCheck => {
      // Dispatch not working
      dispatch(addPayCheck(payCheck));
    }
  };
};

const AddPayCheckContainer = connect(null, mapDispatchToProps)(AddPaycheck);

export default AddPayCheckContainer;
