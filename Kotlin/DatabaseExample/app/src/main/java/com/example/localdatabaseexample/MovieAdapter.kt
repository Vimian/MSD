package com.example.localdatabaseexample

import android.net.Uri
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.constraintlayout.widget.ConstraintLayout
import androidx.fragment.app.FragmentActivity
import androidx.recyclerview.widget.RecyclerView
import com.example.localdatabaseexample.Database.Movie

class MovieAdapter(private val data : ArrayList<Movie>, private val activity: FragmentActivity) :
    RecyclerView.Adapter<MovieAdapter.ViewHolder>() {

    class ViewHolder(item : View): RecyclerView.ViewHolder(item) {
        val movieItem : ConstraintLayout = item.findViewById(R.id.movieItem)
        val movieTitle : TextView = item.findViewById(R.id.movieTitle)
        val movieImage : ImageView = item.findViewById(R.id.movieImage)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(
            R.layout.movie_item, parent, false)
        return ViewHolder(view)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val item = data[position]
        holder.movieTitle.text = item.name

        holder.movieImage.setImageResource(item.image)

        holder.movieItem.setOnClickListener {
            val fragmentManager = activity.supportFragmentManager
            val fragmentTransaction = fragmentManager.beginTransaction()
            fragmentTransaction.replace(R.id.frameLayout, DetailedFragment(item))
            fragmentTransaction.commit()
        }
    }

    override fun getItemCount(): Int {
        return data.size
    }
}