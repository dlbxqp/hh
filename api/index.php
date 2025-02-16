<?php
if($_SERVER['REQUEST_METHOD'] == 'GET'){
    $Resume = new Resume();

    exit($Resume->start());
}