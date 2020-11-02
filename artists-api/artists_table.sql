
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `api_db`
--

--
-- Table structure for table `artists_table`
--

CREATE TABLE `artists_table` (
  `ID` int(10) NOT NULL,
  `NAME` varchar(50) DEFAULT NULL,
  `STAGE_NAME` varchar(50) DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `GENRE` varchar(50) DEFAULT NULL,
  `ALBUMS` varchar(512) DEFAULT NULL,
  `RECORD_LABEL` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO `artists_table` (`ID`, `NAME`, `STAGE_NAME`, `DOB`, `GENRE`, `ALBUMS`, `RECORD_LABEL`) VALUES
(1, 'DRAKE AUBREY GRAHAM', 'DRAKE', '2019-09-09', 'Hip Hop / Rap', 'Take Care, Scorpion', 'OVO SOUND'),
(2, 'Jarad Anthony Higgins', 'juice wrld', '2020-10-07', 'Hip Hop / Trap Music', 'Goodbye and Good riddance', 'INTERSCOPE RECORDS'),
(3, 'Jordan Michael Houston', 'juicy j', '2020-10-07', 'HIP HOP', 'Stay Trippy', 'TAYLOR GANG'),
(4, 'Austin Richard Post', 'Post Malone', '2020-10-01', 'Soul / Hip Hop', 'Stoney, Beerbongs and Bentleys', 'REPUBLIC RECORDS'),
(5, 'Nasir Bin Olu Dara', 'Nas', '2020-10-06', 'Hip Hop / Rap', 'Illmatic, Untitled, Life is good', 'DEF JAM RECORDINGS'),
(6, 'Ricardo Valdez Valentine Jr.', '6lack', '2020-09-23', 'R & B', 'East Atlanta Love Letter', 'INTERSCOPE RECORDS');

ALTER TABLE `artists_table`
  ADD PRIMARY KEY (`ID`);

ALTER TABLE `artists_table`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
