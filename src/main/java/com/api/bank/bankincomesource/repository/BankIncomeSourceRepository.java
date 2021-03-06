package com.api.bank.bankincomesource.repository;

import com.feature.bank.bankincomesource.model.BankIncomeSource;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Interface that provides the data access layer API to work on {@link BankIncomeSource} objects
 **/
public interface BankIncomeSourceRepository extends JpaRepository<BankIncomeSource, String> {
}
