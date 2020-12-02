package co.edu.udea.basededatos.facade;

import co.edu.udea.basededatos.mapper.PaisMapper;
import co.edu.udea.basededatos.modelo.PaisDTO;
import co.edu.udea.basededatos.service.PaisService;
import org.springframework.stereotype.Service;

@Service
public class PaisFacade {

    private final PaisService paisService;
    private final PaisMapper paisMapper;

    public PaisFacade(PaisService paisService, PaisMapper paisMapper) {
        this.paisService = paisService;
        this.paisMapper = paisMapper;
    }

    public PaisDTO guardarPais(PaisDTO pais) {
        return paisMapper.toDto(paisService.guardarPais(paisMapper.toEntity(pais)));
    }

}
