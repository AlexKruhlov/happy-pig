package com.feature.fund.model;

import com.feature.item.model.Item;
import lombok.*;
import org.hibernate.annotations.Generated;
import org.hibernate.annotations.GenerationTime;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "funds")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Fund implements Serializable {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid")
    private String id;

    @Column
    private String name;

    @Column(name = "start_date", insertable = false)
    @Generated(value = GenerationTime.INSERT)
    private LocalDateTime startDate;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "fundId", orphanRemoval = true)
    @Singular
    private List<Item> items;

    @Transient
    private BigInteger amount;

    @Transient
    private BigInteger income;

    @Transient
    private BigInteger expense;
}
