import * as uuid from 'uuid'
import * as path from 'path'

class FileService {
    fileUpload(file) {
        try {
            const fileName = uuid.v4() + '.jpg';
            const fileLink = path.resolve('static', fileName);
            file.mv(fileLink);
            return fileName
        } catch (e) {
            console.log(e)
        }
    }
}

export default new FileService()