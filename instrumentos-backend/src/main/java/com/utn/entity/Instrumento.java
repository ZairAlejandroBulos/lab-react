package com.utn.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "instrumento")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Instrumento extends Base {

    @Column(name = "instrumento", nullable = false)
    private String instrumento;

    @Column(name = "marca", nullable = false)
    private String marca;

    @Column(name = "modelo", nullable = false)
    private String modelo;

    @Column(name = "imagen", nullable = false)
    private String imagen;

    @Column(name = "precio", nullable = false)
    private Double precio;

    @Column(name = "costo_envio", nullable = false)
    private Double costoEnvio;

    @Column(name = "cantidad_vendida", nullable = false)
    private Integer cantidadVendida;

    @Column(name = "descripcion", nullable = false)
    private String descripcion;
}
