package com.utn.repository;

import com.utn.entity.Instrumento;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InstrumentoRepository extends BaseRepository<Instrumento, Long>  {
    @Query(value = "SELECT * FROM Instrumento WHERE instrumento LIKE %:termino%", nativeQuery = true)
    List<Instrumento> findByTermino(String termino);

}
