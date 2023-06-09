package com.utn.util;

import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.io.IOException;

public class ImageUtil {

    /**
     * Verifica si el archivo es una imagen
     *
     * @param file - Imagen a verificar
     * @return true si el archivo es una image, false de lo contrario
     */
    public static boolean isImage(MultipartFile file) {
        try {
            ImageIO.read(file.getInputStream());
            return true;
        } catch (IOException e) {
            return false;
        }
    }

    /**
     * Verifica si el tamaño del archivo es menor o igual a 10MB
     *
     * @param file - Imagen a verificar
     * @return true si el tamaño del archivo archivo es menor o igual a 10MB, false de lo contrario
     */
    public static boolean isSizeAcceptable(MultipartFile file) {
        return file.getSize() <= 10 * 1024 * 1024;
    }

}
