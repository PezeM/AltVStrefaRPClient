/// <reference path="../../../natives.d.ts" />
/// <reference path="../../../alt.d.ts" />

import * as alt from 'alt';

class StreamingView {
    constructor() {
        alt.log('Initialized Streaming view');
        this.view = new alt.WebView('http://resources/AltVStrefaRPClient/streamingView/index.html', false);
    }
}

const streamingView = new StreamingView();
export default streamingView;
