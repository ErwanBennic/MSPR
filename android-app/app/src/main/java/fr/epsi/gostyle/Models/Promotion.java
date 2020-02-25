package fr.epsi.gostyle.Models;

public class Promotion {
    private String code;
    private String libelle;
    private int pourcentage;
    private String marque;
    private String datepremption;
    private String image;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public int getPourcentage() {
        return pourcentage;
    }

    public void setPourcentage(int pourcentage) {
        this.pourcentage = pourcentage;
    }

    public String getMarque() {
        return marque;
    }

    public void setMarque(String marque) {
        this.marque = marque;
    }

    public String getDatepremption() {
        return datepremption;
    }

    public void setDatepremption(String datepremption) {
        this.datepremption = datepremption;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
