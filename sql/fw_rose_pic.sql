-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-12-19 03:29:43
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
-- 表的结构 `fw_rose_pic`
--

CREATE TABLE `fw_rose_pic` (
  `pid` int(11) NOT NULL,
  `rid` int(11) DEFAULT NULL,
  `fid` int(11) DEFAULT NULL,
  `pic` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `fw_rose_pic`
--

INSERT INTO `fw_rose_pic` (`pid`, `rid`, `fid`, `pic`) VALUES
(1, 1, 1, 'images/products_img/jyshiguang1.jpg'),
(2, 1, 1, 'images/products_img/jyshiguang2.jpg'),
(3, 2, 1, 'images/products_img/shenqingjn1.jpg'),
(4, 3, 1, 'images/products_img/lmmw1.jpg'),
(5, 4, 1, 'images/products_img/lmxq1.jpg'),
(6, 4, 1, 'images/products_img/lmxq2.jpg'),
(7, 5, 1, 'images/products_img/qfyy1.jpg'),
(8, 6, 1, 'images/products_img/lianqu1.jpg'),
(9, 6, 1, 'images/products_img/lianqu2.jpg'),
(10, 7, 1, 'images/products_img/LOVE1.jpg'),
(11, 8, 1, 'images/products_img/ygha1.jpg'),
(12, 8, 1, 'images/products_img/ygha2.jpg'),
(13, 9, 1, 'images/products_img/yxyy1.jpg'),
(14, 10, 1, 'images/products_img/yuanfen1.jpg'),
(15, 11, 1, 'images/products_img/yishengqp1.jpg'),
(16, 12, 1, 'images/products_img/ywqs1.jpg'),
(17, 13, 1, 'images/products_img/bnjj1.jpg'),
(18, 14, 1, 'images/products_img/bllr1.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fw_rose_pic`
--
ALTER TABLE `fw_rose_pic`
  ADD PRIMARY KEY (`pid`),
  ADD KEY `rid` (`rid`),
  ADD KEY `fid` (`fid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `fw_rose_pic`
--
ALTER TABLE `fw_rose_pic`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- 限制导出的表
--

--
-- 限制表 `fw_rose_pic`
--
ALTER TABLE `fw_rose_pic`
  ADD CONSTRAINT `fw_rose_pic_ibfk_1` FOREIGN KEY (`rid`) REFERENCES `fw_rose` (`rid`),
  ADD CONSTRAINT `fw_rose_pic_ibfk_2` FOREIGN KEY (`fid`) REFERENCES `fw_family` (`fid`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
