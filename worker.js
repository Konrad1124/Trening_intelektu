
const Encoder = new TextEncoder();
const Decoder = new TextDecoder();
let size;
let accessFile
this.addEventListener('message', async function(e) {
    
    switch (e.data[0]) {
        case "save":
            const content = Encoder.encode(JSON.stringify(e.data[2])+"^|^");
            accessFile = await e.data[1].createSyncAccessHandle();
            size = accessFile.getSize();
            accessFile.write(content, {at: size});
            accessFile.flush();
            accessFile.close();
            break;
        case "read":
            accessFile = await e.data[1].createSyncAccessHandle();
            size = accessFile.getSize();
            const dataView = new DataView(new ArrayBuffer(size));
            accessFile.read(dataView);
            this.postMessage(Decoder.decode(dataView).split("^|^"));
            accessFile.close();
            break;
    }
}, false);
