package com.utn.service;

import com.utn.entity.Instrumento;
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface InstrumentoService extends BaseService<Instrumento, Long> {
    Resource findImage(String name) throws Exception;
    void saveImage(MultipartFile file, String imageName) throws Exception;
}
