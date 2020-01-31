CREATE DATABASE IF NOT EXISTS promotions;
DROP TABLE IF EXISTS promo;
DROP TABLE IF EXISTS client;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


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
(1, 'Banner', 'Bruce', 'brucebanner@ici.fr', 'brucebanner'),
(2, 'Stark', 'Tony', 'tonystark@ici.fr', 'tonystark'),
(3, 'Romanoff', 'Natasha', 'natasharomanoff@ici.fr', 'natasharomanoff');

-- --------------------------------------------------------

--
-- Structure de la table `promo`
--

CREATE TABLE `promo` (
  `id` int(11) NOT NULL,
  `code` varchar(50) NOT NULL,
  `libelle` varchar(100) NOT NULL,
  `dateperemption` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `promo`
--

INSERT INTO `promo` (`id`, `code`, `libelle`, `dateperemption`) VALUES
(1, 'PRINTEMPS20', 'Le printemps, c\'est maintenant !', '2020-03-31'),
(2, 'GRENOUILLE20', 'Certains matins de printemps ont une fraîcheur de grenouille.', '2020-04-30');

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

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
