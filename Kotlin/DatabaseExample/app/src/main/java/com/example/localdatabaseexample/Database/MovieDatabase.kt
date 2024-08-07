package com.example.localdatabaseexample.Database

import android.content.Context
import androidx.room.Database
import androidx.room.Room.databaseBuilder
import androidx.room.RoomDatabase

@Database(entities = arrayOf(Movie::class), version = 1)
abstract class MovieDatabase : RoomDatabase() {
    abstract fun movieDao(): MovieDao

    companion object {
        private var INSTANCE: MovieDatabase? = null

        fun getAppDatabase(context: Context): MovieDatabase? {
            if (INSTANCE == null) {
                INSTANCE = databaseBuilder(context.applicationContext, MovieDatabase::class.java, "MovieDatabase")
                    //Do not allow main thread queries in your final prototypes!
                    .build()
            }
            return INSTANCE
        }
    }
}