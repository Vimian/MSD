package com.example.localdatabaseexample

import android.os.Bundle
import android.util.Log
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.example.localdatabaseexample.Database.Movie
import com.example.localdatabaseexample.Database.MovieDatabase

// TODO: Rename parameter arguments, choose names that match
// the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
private const val ARG_PARAM1 = "param1"
private const val ARG_PARAM2 = "param2"

/**
 * A simple [Fragment] subclass.
 * Use the [UpcomingFragment.newInstance] factory method to
 * create an instance of this fragment.
 */
class UpcomingFragment : Fragment() {
    // TODO: Rename and change types of parameters
    private var param1: String? = null
    private var param2: String? = null

    private lateinit var db : MovieDatabase
    private lateinit var adapter: MovieAdapter
    private lateinit var recyclerView: RecyclerView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        arguments?.let {
            param1 = it.getString(ARG_PARAM1)
            param2 = it.getString(ARG_PARAM2)
        }

        db = MovieDatabase.getAppDatabase(requireActivity())!!
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_upcoming, container, false)
    }

    companion object {
        /**
         * Use this factory method to create a new instance of
         * this fragment using the provided parameters.
         *
         * @param param1 Parameter 1.
         * @param param2 Parameter 2.
         * @return A new instance of fragment UpcomingFragment.
         */
        // TODO: Rename and change types and number of parameters
        @JvmStatic
        fun newInstance(param1: String, param2: String) =
            UpcomingFragment().apply {
                arguments = Bundle().apply {
                    putString(ARG_PARAM1, param1)
                    putString(ARG_PARAM2, param2)
                }
            }
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        CreateRecyclerViewThread().start()
    }

    inner class CreateRecyclerViewThread() : Thread() {
        override fun run() {
            super.run()
            if(db.movieDao().getAll().isEmpty()){
                Log.i("DatabaseTest", "Ran Database Population")
                var movie1 = Movie(1, "See How They Run", R.drawable.movie_logo, "In the West End of 1950s London, plans for a movie version of a smash-hit play come to an abrupt halt after a pivotal member of the crew is murdered.", 6.7, 2022)
                var movie2 = Movie(2, "The Lost King", R.drawable.movie_logo, "An amateur historian defies the stodgy academic establishment in her efforts to find King Richard III's remains, which were lost for over 500 years.", 6.8, 2022)
                var movie3 = Movie(3, "Eiffel", R.drawable.movie_logo, "The government is asking Eiffel to design something spectacular for the 1889 Paris World Fair, but Eiffel simply wants to design the subway. Suddenly, everything changes when Eiffel crosses paths with a mysterious woman from Arun's past.", 6.2, 2021)
                var movie4 = Movie(4, "Ingen kender dagen", R.drawable.movie_logo, "The lives of five unrelated people--a husband, a doctor, a wife, a student, and a young daughter--are turned upside-down with irreversible consequences.", 7.0, 2022)

                db.movieDao().insert(movie1)
                db.movieDao().insert(movie2)
                db.movieDao().insert(movie3)
                db.movieDao().insert(movie4)
            }

            val movieArrayList = db.movieDao().getAll() as ArrayList<Movie>

            requireActivity().runOnUiThread(Runnable {
                adapter = MovieAdapter(movieArrayList, requireActivity())
                recyclerView = requireView().findViewById(R.id.recycler_view)
                var layoutManager = LinearLayoutManager(context)
                recyclerView.layoutManager = layoutManager
                recyclerView.adapter = adapter
            })
        }
    }
}