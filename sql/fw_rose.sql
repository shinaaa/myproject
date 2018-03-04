-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-12-19 02:10:45
-- 服务器版本： 10.1.9-MariaDB
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `flower_whisper`
--

-- --------------------------------------------------------

--
-- 表的结构 `fw_rose`
--

CREATE TABLE `fw_rose` (
  `rid` int(11) NOT NULL,
  `fid` int(11) DEFAULT NULL,
  `title` varchar(60) DEFAULT NULL,
  `material` varchar(100) NOT NULL,
  `meaning` varchar(200) NOT NULL,
  `price` decimal(6,2) DEFAULT NULL,
  `src` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `fw_rose`
--

INSERT INTO `fw_rose` (`rid`, `fid`, `title`, `material`, `meaning`, `price`, `src`) VALUES
(1, 1, '惊艳时光', '红玫瑰19枝、绿色桔梗5枝、银叶菊5枝', '你悄悄地出现，教会我如何思念', '226.00', NULL),
(2, 1, '深情眷恋', '66枝红玫瑰', '想念你眼底的温柔，思念你嘴角的笑容，眷恋你深情的相拥，愿我们的爱到永久', '436.00', 'null'),
(3, 1, '浪漫满屋', '香槟玫瑰11支，浅蓝色绣球1枝', '如果可以，让心一起住在浪漫满屋里，去开开心心、活蹦乱跳的谈情说爱', '199.00', 'null'),
(4, 1, '浪漫心情', '红玫瑰19枝，白色相思梅0.5扎，栀子叶1扎', '铺满玫瑰的夜里，有温暖的告白在等待，来我的怀里，拥抱我的爱，把你的热情摊开，我会一直都在', '208.00', 'null'),
(5, 1, '清风雅韵', '香槟玫瑰12枝，迷你菊6枝，栀子叶半扎', '清似溪流涓涓水，风如三月杨柳絮。雅吟风骚诗千古，韵含真情吐芬芳', '159.00', 'null'),
(6, 1, '恋曲', '红玫瑰9枝，白百合1枝，白色雏菊2枝，尤加利3枝', '一首爱的恋曲，一份心的期待；几许期许，几许感悟', '178.00', 'null'),
(7, 1, 'LOVE 99', '99枝精品红玫瑰花束，满天星围绕', '99朵靓丽的红玫瑰，献给你的至爱', '499.00', 'null'),
(8, 1, '阳光海岸', '19枝香槟玫瑰，白色石竹梅围绕', '和你手牵手漫步海边，在沙滩上画两颗心，心心相印，永不分离', '218.00', 'null'),
(9, 1, '一心一意', '红玫瑰11枝，粉色(或者紫色）勿忘我0.3扎，栀子叶适量搭配', '一句寒暖，一线相喧；一句叮咛，一笺相传；一份相思，一心相盼；一份爱意，一生相恋', '126.00', 'null'),
(10, 1, '缘分', '11枝红玫瑰,2枝多头白香水百合', '转身你成了我的风景，有一种惊喜暗藏于心', '189.00', 'null'),
(11, 1, '一生期盼', '紫玫瑰19枝、紫色桔梗6枝、搭配适量紫色雏菊、银叶菊、绿叶', '喜欢是淡淡的爱，爱是深深的喜欢，爱你是我一生的期盼，祝你一生都幸福，快乐永远', '259.00', 'null'),
(12, 1, '一往情深', '高档礼盒装鲜花:19枝红玫瑰，勿忘我适量', '你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深', '235.00', 'null'),
(13, 1, '伴你久久', '冷美人紫玫瑰99枝', '为你动情一瞬，便想相爱一生', '328.00', 'null'),
(14, 1, '巴黎恋人', '红玫瑰19枝，搭配适量尤加利叶', '遇一人白首，择一城终老！', '206.00', 'null');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fw_rose`
--
ALTER TABLE `fw_rose`
  ADD PRIMARY KEY (`rid`),
  ADD KEY `fid` (`fid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `fw_rose`
--
ALTER TABLE `fw_rose`
  MODIFY `rid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- 限制导出的表
--

--
-- 限制表 `fw_rose`
--
ALTER TABLE `fw_rose`
  ADD CONSTRAINT `fw_rose_ibfk_1` FOREIGN KEY (`fid`) REFERENCES `fw_family` (`fid`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
