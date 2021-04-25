import * as React from "react";
import { WebView } from "react-native-webview";

export default class RNWebview extends React.Component {
  webview = null;
  render() {
    return (
      <WebView
        source={{
          uri: this.props.uri,
        }}
        style={{ marginTop: 20, marginHorizontal: 15 }}
        originWhitelist={["*"]}
        ref={(ref) => (this.webview = ref)}
        onNavigationStateChange={this.handleWebViewNavigationStateChange}
      />
    );
  }

  handleWebViewNavigationStateChange = (newNavState) => {
    const { url } = newNavState;
    if (!url) return;

    if (url.includes("codetraingh.com")) {
      this.webview.stopLoading();
      this.props.closeWebView();
    }
  };
}
