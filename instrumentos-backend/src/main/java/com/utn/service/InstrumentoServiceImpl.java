package com.utn.service;

import com.utn.entity.Instrumento;
import com.utn.repository.BaseRepository;
import com.utn.repository.InstrumentoRepository;
import com.utn.util.ImageUtil;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;


@Service
public class InstrumentoServiceImpl extends BaseServiceImpl<Instrumento, Long> implements InstrumentoService {

    @Autowired
    private InstrumentoRepository instrumentoRepository;

    public InstrumentoServiceImpl(BaseRepository<Instrumento, Long> baseRepository) {
        super(baseRepository);
    }

    @Override
    public Resource findImage(String imageName) throws Exception {
        try {
            Path pathImage = Paths.get("images").toAbsolutePath().resolve(imageName);
            Resource resource = new UrlResource((pathImage.toUri()));

            if (!resource.exists() || !resource.isReadable()) {
                throw new Exception("La imagen no existe");
            }

            return resource;
        } catch (Exception e) {
            throw new Exception("Error al recuperar la imagen");
        }
    }

    @Override
    public void saveImage(MultipartFile file, String name) throws Exception {
        try {
            if (!ImageUtil.isImage(file) || !ImageUtil.isSizeAcceptable(file)) {
                throw new Exception("El archivo no es una imagen o su tamaño es demasiado grande");
            }

            Path path = Paths.get("images").toAbsolutePath();
            String filePath = path + File.separator + name;

            File dest = new File(filePath);
            file.transferTo(dest);
        } catch (IOException e) {
            throw new Exception("Error al guardar la imagen");
        }
    }

}
