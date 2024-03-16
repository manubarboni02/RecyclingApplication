package Fullstack_application.Recycling_reward.models;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor(force = true)
@AllArgsConstructor
@RequiredArgsConstructor
public class User{
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "userID", length = 100)
    private Long userID;
    @Column(name = "firstname", length = 20)
    private final String firstname;
    @Column(name = "lastname", length = 20)
    private final String lastname;
    @Column(name = "username", length = 32)
    private final String username;
    @Column(name = "password", length = 32)
    private final String password;
    @Column(name = "role", length = 12)
    private final String role;
}
