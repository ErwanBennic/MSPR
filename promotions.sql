CREATE DATABASE IF NOT EXISTS promotions;
USE promotions;
DROP TABLE IF EXISTS promo;
DROP TABLE IF EXISTS client;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+01:00";


--
-- Base de données :  `promotions`
--

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `id` int(11) NOT NULL,
  `nom` varchar(15) NOT NULL,
  `prenom` varchar(15) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`id`, `nom`, `prenom`, `email`, `password`) VALUES
(1, 'Banner', 'Bruce', 'brucebanner@ici.fr', '$2b$10$ZkpYW7V21QJQjqnkG9O/ueWx6QSQ3m04ZP3fgHLAlBI9lOcuvSt.S'),
(2, 'Stark', 'Tony', 'tonystark@ici.fr', '$2b$10$xuE8dyrFc99v4N3MsKL48OHuLobbc1PIr5FMKz.h7ezPXLPU2BHxq'),
(3, 'Romanoff', 'Natasha', 'natasharomanoff@ici.fr', '$2b$10$L3Ajres1ksl55x3Sa1z9LeBNIFu7PLqYwuW9A3/NzHyYFxijc2.nq');

-- --------------------------------------------------------

--
-- Structure de la table `promo`
--

CREATE TABLE `promo` (
  `id` int(11) NOT NULL,
  `code` varchar(50) NOT NULL,
  `libelle` varchar(100) NOT NULL,
  `pourcentage` float NOT NULL,
  `marque` varchar(50) CHARACTER SET utf8mb4 NOT NULL,
  `dateperemption` date NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `promo`
--

INSERT INTO `promo` (`id`, `code`, `libelle`, `pourcentage`, `marque`, `dateperemption`, `image`) VALUES
(1, 'PRINTEMPS20', 'Le printemps, c\'est maintenant !', 15, 'Nike', '2020-03-31', 'https://i.ytimg.com/vi/Q0y4D1_xn4c/maxresdefault.jpg'),
(2, 'GRENOUILLE20', 'Certains matins de printemps ont une fraîcheur de grenouille.', 25, 'Roxy', '2020-04-30', 'https://cdn.1min30.com/wp-content/uploads/2017/05/logo-Roxy.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `promoclient`
--

CREATE TABLE `promoclient` (
  `id_client` int(11) NOT NULL,
  `id_promo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `promoclient`
--

INSERT INTO `promoclient` (`id_client`, `id_promo`) VALUES
(1, 1),
(1, 2),
(2, 1),
(3, 2);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `promo`
--
ALTER TABLE `promo`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `promoclient`
--
ALTER TABLE `promoclient`
  ADD PRIMARY KEY (`id_client`,`id_promo`),
  ADD KEY `promoclient_promo0_FK` (`id_promo`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `client`
--
ALTER TABLE `client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `promo`
--
ALTER TABLE `promo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `promoclient`
--
ALTER TABLE `promoclient`
  ADD CONSTRAINT `promoclient_client_FK` FOREIGN KEY (`id_client`) REFERENCES `client` (`id`),
  ADD CONSTRAINT `promoclient_promo0_FK` FOREIGN KEY (`id_promo`) REFERENCES `promo` (`id`);
COMMIT;

