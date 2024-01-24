
const Encoder = new TextEncoder();
const Decoder = new TextDecoder();
let size;

this.addEventListener('message', async function(e) {
    
    switch (e.data[0]) {
        case "save":
            const content = textEncoder.encode(JSON.stringify(e.data[2]));
            const accessFile = await e.data[1].createSyncAccessHandle();
            size = accessFile.getSize();
            accessFile.write(content, {at: size});
            break;
        case "read":
            
            break;
    }
}, false);
