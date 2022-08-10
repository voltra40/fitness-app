package com.voltra40.fitnessapp.repository;

import com.voltra40.fitnessapp.model.Macro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MacroRepository extends JpaRepository<Macro, Long> {
}
