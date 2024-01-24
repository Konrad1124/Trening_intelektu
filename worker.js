
const Encoder = new TextEncoder();
const Decoder = new TextDecoder();
let size;
let accessFile
this.addEventListener('message', async function(e) {
    
    switch (e.data[0]) {
        case "save":
            const content = textEncoder.encode(JSON.stringify(e.data[2]));
            accessFile = await e.data[1].createSyncAccessHandle();
            size = accessFile.getSize();
            accessFile.write(content, {at: size});
            accessFile.flush();

            break;
        case "read":
            size = accessHandle.getSize();
            accessFile = await e.data[1].createSyncAccessHandle();
            const dataView = new DataView(new ArrayBuffer(size));
            accessFile.read(dataView);
            textDecoder.decode(dataView)
            this.postMessage(textDecoder.decode(dataView));
            break;
    }
}, false);
