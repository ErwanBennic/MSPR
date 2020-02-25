package fr.epsi.gostyle;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import com.squareup.picasso.Picasso;

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

        View promoListItem;
        if (convertView == null){
            LayoutInflater layoutInflater = (LayoutInflater) getContext().getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            promoListItem = layoutInflater.inflate(this.listItemRessources, parent, false);
        } else {
            promoListItem = convertView;
        }

        TextView textViewTitle = promoListItem.findViewById(R.id.textViewTitle);
        TextView textViewDate = promoListItem.findViewById(R.id.textViewDate);
        ImageView imageView = promoListItem.findViewById(R.id.imagePromo);

        textViewTitle.setText(promotion.getLibelle());
        textViewDate.setText(promotion.getMarque() + " - " + promotion.getCode() + " - " + promotion.getPourcentage() + "%");

        Picasso.get().load(promotion.getImage()).into(imageView);

        return promoListItem;
    }
}
