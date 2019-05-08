import { connect } from "react-redux";
import App from "../Components/App/App.jsx";

const mapStateToProps = (state, ownProps) => ({
  ...state
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addNode(node) {
    dispatch({
      type: "ADD_NODE",
      node
    });
  },

  addConnector(connector) {
    dispatch({
      type: "ADD_CONNECTOR",
      connector
    });
  },
  updateNode(node) {
    dispatch({
      type: "UPDATE_NODE_VALUES",
      node
    });
  }
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
