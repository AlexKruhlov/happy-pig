package com.api.fund.controller;

import com.feature.fund.dto.FundDto;
import com.feature.fund.model.Fund;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface FundController {

    FundDto findById(@PathVariable String id);

    List<FundDto> findAll();

    FundDto saveOrUpdate(FundDto fundDto);
}
