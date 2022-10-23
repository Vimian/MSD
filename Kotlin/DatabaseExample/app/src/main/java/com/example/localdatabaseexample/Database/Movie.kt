package com.example.localdatabaseexample.Database

import android.media.Image
import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity //(tableName = "EmployeeList")
data class Movie(
    @PrimaryKey val id: Int,
    @ColumnInfo(name = "name") val name: String,
    @ColumnInfo(name = "image") val image: Int,
    @ColumnInfo(name = "description") val description: String,
    @ColumnInfo(name = "rating") val rating: Double,
    @ColumnInfo(name = "release") val release: Int,

)

// Automatic primary key generation example
/*
@Entity
data class Employee(
    @PrimaryKey (autoGenerate = true)
    val id: Int = 0,
    @ColumnInfo(name = "name") val firstName: String?,
    @ColumnInfo(name = "position") val position: String?,
    @ColumnInfo(name = "admin") val admin: Boolean?
)*/