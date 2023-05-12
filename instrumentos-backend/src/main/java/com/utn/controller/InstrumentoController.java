package com.utn.controller;

import com.utn.entity.Instrumento;
import com.utn.service.InstrumentoServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/v1/instrumentos")
public class InstrumentoController extends BaseControllerImpl<Instrumento, InstrumentoServiceImpl> {

    @GetMapping("/images/{imageName}")
    public ResponseEntity<?> getImage(@PathVariable String imageName) {
        try {
            return ResponseEntity.status(HttpStatus.OK)
                    .contentType(MediaType.IMAGE_JPEG)
                    .body(service.findImage(imageName));
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("{\"error\": \"Ocurrio un error al guardar la imagen\"}");
        }
    }

    @PostMapping("/save-image/{name}")
    public ResponseEntity<?> saveImage(@RequestParam("file") MultipartFile file, @PathVariable String name) {
        try {
            service.saveImage(file, name);
            return ResponseEntity.status(HttpStatus.OK)
                    .body("");
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("{\"error\": \"Ocurrio un error al guardar la imagen\"}");
        }
    }

}
