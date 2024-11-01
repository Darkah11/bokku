import React from 'react';
function StoreRocketWidget() {
    const storeRocketEmbedCode = `<iframe src="https://storerocket.rotimicoker.com/storerocket" width="100%" height="700" frameborder="0"></iframe>`;
    return (
        <div dangerouslySetInnerHTML={{ __html: storeRocketEmbedCode }} />
    );
}
export default StoreRocketWidget;