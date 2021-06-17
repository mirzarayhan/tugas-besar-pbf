-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 17, 2021 at 01:30 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gundam`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `gunplas`
--

CREATE TABLE `gunplas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `series` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `release` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `grade` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `gunplas`
--

INSERT INTO `gunplas` (`id`, `photo`, `model`, `series`, `release`, `grade`, `price`, `created_at`, `updated_at`) VALUES
(3, 'https://1.bp.blogspot.com/-9UpSTgWddCY/YJXJjbGnTUI/AAAAAAAHZCQ/Y2t54BYIV3osywSeg0fDVctCQVq2fClCACLcBGAsYHQ/s1200/hgac-gundam-deathscythe%2B%25281%2529.jpg', 'XXXG-01D Gundam Deathscythe', 'Mobile Suit Gundam Wing', '2021 May', 'HG', '¥1500', '2021-06-15 08:53:42', '2021-06-16 23:37:33'),
(4, 'https://1.bp.blogspot.com/-lqdvSoPwW4Y/YGz7Kbwxc7I/AAAAAAAHY1o/xD0RFd0yLfUVi4gf3KuaXv9KbnVWxzp1ACLcBGAsYHQ/s1200/hguc-xi-gundam-box-art%2B%25282%2529.jpg', 'RX-105 Xi Gundam', 'Mobile Suit Gundam Hathaway', '2021 April', 'HG', '¥6000', '2021-06-15 09:03:32', '2021-06-16 23:37:20'),
(5, 'https://images.tokopedia.net/img/cache/900/product-1/2017/3/19/9646123/9646123_2389155b-39ca-46d4-aef4-d82b64570451_990_633.jpg', 'MSN-001X Gundam Delta Kai', 'Mobile Suit Gundam Unicorn MSV', '2012 December', 'HG', '¥2,600', '2021-06-16 23:33:05', '2021-06-17 02:44:18'),
(6, 'https://images.tokopedia.net/img/cache/700/product-1/2016/4/17/4908894/4908894_3beefb7b-14b2-46c2-a484-c00e31e0b7aa.jpg', 'LM314V23/24 Victory Two Assault-Buster Gundam', 'Mobile Suit Victory Gundam', '2015 May', 'HG', '¥2,000', '2021-06-16 23:36:37', '2021-06-16 23:36:37'),
(7, 'https://images.tokopedia.net/img/cache/900/product-1/2017/12/28/26037846/26037846_46e2944a-2b84-4fc9-8bd0-c5d7605e3b87_1500_947.jpg', 'XM-X1 Crossbone Gundam X-1', 'Mobile Suit Crossbone Gundam', '2014 November', 'HG', '¥1,800', '2021-06-16 23:40:12', '2021-06-16 23:42:37');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2019_08_19_000000_create_failed_jobs_table', 1),
(3, '2021_06_15_121200_create_gunplas_table', 2),
(4, '2021_06_15_123030_create_gunplas_table', 3),
(5, '2021_06_15_130004_create_gunplas_table', 4),
(6, '2021_06_15_153939_create_gunplas_table', 5);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `full_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `full_name`, `email`, `password`, `phone`, `created_at`, `updated_at`) VALUES
(1, 'Mirza', 'Rayhan', 'Mirza Rayhan', 'mirzarayhan22@gmail.com', '25d55ad283aa400af464c76d713c07ad', '082777381823', '2021-06-15 03:09:59', '2021-06-15 03:09:59'),
(2, 'Ucok', 'Manulang', 'Ucok Manulang', 'admin007@gmail.com', '25d55ad283aa400af464c76d713c07ad', '082230913815', '2021-06-15 19:27:27', '2021-06-15 19:27:27'),
(4, 'Kincade', 'Nau', 'Kincade Nau', 'kincadeace97@gmail.com', '25d55ad283aa400af464c76d713c07ad', '08666241662', '2021-06-17 04:06:15', '2021-06-17 04:06:15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gunplas`
--
ALTER TABLE `gunplas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gunplas`
--
ALTER TABLE `gunplas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
