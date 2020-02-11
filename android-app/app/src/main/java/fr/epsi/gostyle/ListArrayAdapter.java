package fr.epsi.gostyle;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

import java.util.List;

import fr.epsi.gostyle.Models.Promotion;

public class ListArrayAdapter extends ArrayAdapter {
    protected int listItemRessources;

    public ListArrayAdapter(Context context, int resource, List objects) {
        super(context, resource, objects);
        this.listItemRessources = resource;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {

        Promotion promotion = (Promotion) getItem(position);

        View matchListItem;
        if (convertView == null){
            LayoutInflater layoutInflater = (LayoutInflater) getContext().getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            matchListItem = layoutInflater.inflate(this.listItemRessources, parent, false);
        } else {
            matchListItem = convertView;
        }

        TextView textViewTitle = matchListItem.findViewById(R.id.textViewTitle);
        TextView textViewDate = matchListItem.findViewById(R.id.textViewDate);

        textViewTitle.setText(promotion.getLibelle());
        textViewDate.setText(promotion.getMarque());

        return matchListItem;
    }
}
