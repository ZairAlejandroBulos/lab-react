/*
SQLyog Ultimate v9.02 
MySQL - 8.0.32 : Database - instrumentosdb
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`instrumentosdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `instrumentosdb`;

/*Data for the table `instrumento` */

insert  into `instrumento`(`id`,`instrumento`,`marca`,`modelo`,`imagen`,`precio`,`costo_envio`,`cantidad_vendida`,`descripcion`) values (1,'Mandolina Instrumento Musical Stagg Sunburst','Stagg','M20','nro10.jpg',2450,0,28,'Estas viendo una excelente mandolina de la marca Stagg, con un sonido muy dulce, tapa aros y fondo de tilo, y diapasón de palisandro. Es un instrumento acústico (no se enchufa) de cuerdas dobles (4 pares) con la caja ovalada y cóncava, y el mástil corto. '),(2,'Pandereta Pandero Instrumento Musical ','DyM ventas','32 sonajas','nro9.jpg',325,150,10,'1 Pandereta - 32 sonajas metálicas. Más de 8 años vendiendo con 100 % de calificaciones POSITIVAS y clientes satisfechos !!'),(3,'Triangulo Musical 24 Cm Percusion','LBP','24','nro8.jpg',260,250,3,'Triangulo Musical de 24 Centímetros De Acero. ENVIOS POR CORREO O ENCOMIENDA: Se le deberán adicionar $40 en concepto de Despacho y el Costo del envío se abonará al recibir el producto en Terminal, Sucursal OCA o Domicilio'),(4,'Bar Chimes Lp Cortina Musical 72 Barras ','FM','LATIN','nro7.jpg',2250,0,2,'BARCHIME CORTINA MUSICAL DE 25 BARRAS LATIN CUSTOM. Emitimos factura A y B'),(5,'Shekeres. Instrumento. Música. Artesanía. ','Azalea Artesanías','Cuentas de madera','nro6.jpg',850,300,5,'Las calabazas utilizadas para nuestras artesanías son sembradas y cosechadas por nosotros, quienes seleccionamos el mejor fruto para garantizar la calidad del producto y ofrecerle algo creativo y original.'),(6,'Antiguo Piano Aleman Con Candelabros. ','Neumeyer','Stratus','nro3.jpg',17000,2000,0,'Buen dia! Sale a la venta este Piano Alemán Neumeyer con candelabros incluidos. Tiene una talla muy bonita en la madera. Una pieza de calidad.'),(7,'Guitarra Ukelele Infantil Grande 60cm','GUITARRA','UKELELE','nro4.jpg',500,0,5,'Material: Plástico smil madera 4 Cuerdas longitud: 60cm, el mejor regalo para usted, su familia y amigos, adecuado para 3-18 años de edad'),(8,'Teclado Organo Electronico Musical Instrumento 54 Teclas ','GADNIC','T01','nro2.jpg',2250,0,1375,'Organo Electrónico GADNIC T01. Display de Led. 54 Teclas. 100 Timbres / 100 Ritmos. 4 1/2 octavas. 8 Percusiones. 8 Canciones de muestra. Grabación y reproducción. Entrada para Micrófono. Salida de Audio (Auriculares / Amplificador). Vibrato. Sustain Incl'),(9,'Instrumentos De Percusión Niños Set Musical Con Estuche ','KNIGHT','LB17','nro1.jpg',2700,300,15,'Estas viendo un excelente y completísimo set de percusion para niños con estuche rígido, equipado con los instrumentos mas divertidos! De gran calidad y sonoridad. Ideal para jardines, escuelas primarias, musicoterapeutas o chicos que se quieran iniciar e'),(10,'Batería Musical Infantil Juguete Niño 9 Piezas Palillos ','Bateria','Infantil','nro5.jpg',850,250,380,'DESCRIPCIÓN: DE 1 A 3 AÑOS. EL SET INCLUYE 5 TAMBORES, PALILLOS Y EL PLATILLO TAL CUAL LAS FOTOS. SONIDOS REALISTAS Y FÁCIL DE MONTAR. MEDIDAS: 40X20X46 CM'),(20,'Guitarra Test','Marca','Modelo','20230512184645450Z.jpg',15000,1200,12,'Nueva Guitarra');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
